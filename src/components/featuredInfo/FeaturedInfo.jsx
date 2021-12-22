import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem coloredCardTop">
        <span className="featuredTitle">Total Employees</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1452</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem  coloredCardTop">
        <span className="featuredTitle">New Employees Added</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">72</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem  coloredCardTop">
        <span className="featuredTitle">Applications</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">765</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
