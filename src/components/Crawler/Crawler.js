import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrawlerRunner from "./components/CrawlerRunner";
import ListCrawlers from "./components/ListCrawlers";
import WordTree from "../WordTree/WordTree";
import {  notification } from 'antd';

class Crawler extends Component {
  static propTypes = {
    crawlersInfo: PropTypes.object.isRequired,
    tree: PropTypes.array.isRequired,
    runCrawler: PropTypes.func.isRequired,
    fetchNewSkills: PropTypes.func.isRequired,
    fetchResultCrawler: PropTypes.func.isRequired,
    fetchCrawlers: PropTypes.func.isRequired
  };

  componentWillUpdate(nextProps) {

    if (nextProps.crawlersInfo.load.loading !== this.props.crawlersInfo.load.loading) {
      const {load} = nextProps.crawlersInfo;

      const mess = load.status === 'success'
        ? "Run crawler by word '" + load.message + "'"
        : "Fail run crawler";

      const desc = load.status === 'success'
        ? "Successfully run new crawler by search word '" + load.message + "'"
        : "Oops! An error occurred: " + load.message;

      const type = load.status !== 'success' ? 'error' : 'success';

      if (!load.loading)
          notification[type]({
            message: mess,
            description: desc,
          })
    }
  }

  render() {
    const {tree, crawlersInfo, runCrawler,
      fetchNewSkills, fetchResultCrawler, fetchCrawlers} = this.props;

    return (
      <div>
        <br />
        <CrawlerRunner runCrawler={runCrawler}/>
        <ListCrawlers
          crawlers={crawlersInfo.crawlers}
          page={crawlersInfo.page}
          fetchResultCrawler={fetchResultCrawler}
          fetchCrawlers={fetchCrawlers}
        />
        <WordTree nodes={tree} addNewSkills={fetchNewSkills}/>
      </div>
    );
  }
}

export default Crawler;

