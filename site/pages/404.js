import { define } from 'skatejs';

import { Component } from '../utils';

@define
export default class extends Component {
  static is = 'x-notfound';
  render() {
    return this.$`
      <h2>Not found!</h2>
      <p>The requested page couldn't be found.</p>
    `;
  }
}
