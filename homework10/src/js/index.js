
import "../css/style.css";

import "../scss/base.scss";

import Currency from  "./nbrbCurrency";
new Currency("EUR")
  .getRate();

import { User } from '../ts/user';
let user1 = new User("Roman");
console.log(user1.greet());

const _ = require('lodash');
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));





