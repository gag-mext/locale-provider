

//用 `LocaleProvider` 包裹你的应用，并引用对应的语言包。
import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from '@gag/pagination';
import LocaleProvider from '../src';
import List from '@gag/list/src';
import DatePicker from '@gag/date-picker';
import WhiteSpace from '@gag/white-space';
import Button from '@gag/button';
import enUS from '../src/en_US';
import moment from 'moment';

const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const Page = () => (
  <div>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List
      className="date-picker-list"
      style={{ backgroundColor: 'white' }}
    >
      <DatePicker
        mode="date"
        title="选择日期"
        extra="点击查看国际化"
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow="horizontal">日期</List.Item>
      </DatePicker>
    </List>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
    };
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isEnglish: !this.state.isEnglish,
    });
  }
  render() {
    const locale = this.state.isEnglish ? enUS : undefined;
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>{this.state.isEnglish ? 'change to chinese' : '切换到英文'}</Button>
        <WhiteSpace />
        <LocaleProvider locale={locale}>
          <Page />
        </LocaleProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('sk-root'));
