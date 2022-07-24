import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  HANDLE_SEARCH,
  FILTER_ITEMS
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  search: state.common.search
});

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
  onSearchChange: (payload) => dispatch({type: HANDLE_SEARCH, payload}),
  onFilterItems: (payload) => dispatch({type: FILTER_ITEMS, payload})
});

class Home extends React.Component {
  componentWillMount() {
    const tab = "all";
    let itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
  }

  componentDidUpdate(prevprops) {
    if(this.props.search !== prevprops.search) {
      if(this.props.search.length >= 3) {
        this.props.onFilterItems(agent.Items.bySearch(this.props.search))
      }
    }
  }


  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {

    return (
      <div className="home-page">
        <Banner onSearchChange={this.props.onSearchChange}/>

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          <MainView />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
