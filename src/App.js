import "./App.css";
import Countdown from "react-countdown";
import { useMetaMask, useConnectedMetaMask } from "metamask-react";
import { useEffect, useRef, useState } from "react";
import { computeHeadingLevel } from "@testing-library/react";
const axios = require("axios").default;
function ConnectedWallet({setEthereum}){
  const {ethereum} = useConnectedMetaMask();
  useEffect(()=>{
    setEthereum(ethereum);
  })
  return null;
}
function App() {
  const { status, connect, chainId, addChain, switchChain, account} = useMetaMask();

  const [ethereum, setEthereum] = useState(null);
  const refInputAmount = useRef(null);
  const refX = useRef(null);
  const [progressBarPercent, setProgressBarPercent] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [minBuy, setMinBuy] = useState(1);
  const [maxBuy, setMaxBuy] = useState(9999999999);
  const [bnbPrice, setBnbPrice] = useState(9999999999);
  const [data, setData] = useState({"date": localStorage.getItem("date") ?? "2030-01-01T00:00:00", bnbAmount: localStorage.getItem("bnbAmount") ?? "50", "title": localStorage.getItem("title") ?? "Title", "description": localStorage.getItem("description") ?? "Lorem Ipsum","imageUrl": localStorage.getItem("imageUrl") ?? "https://upload.wikimedia.org/wikipedia/commons/5/54/Q_magazine_logo.svg","website": localStorage.getItem("website") ?? "https://google.com", "twitterUrl" : localStorage.getItem("twitterUrl") ?? "https://twitter.com", "telegramUrl" : localStorage.getItem("telegramUrl") ?? "https://t.me", "mainStatusBar": localStorage.getItem("mainStatusBar") ?? "Sale Live", "minBuyUSDT": localStorage.getItem("minBuyUSDT") ?? 100,"maxBuyUSDT": localStorage.getItem("maxBuyUSDT") ?? 100000000, "progressBarSTART": localStorage.getItem("progressBarSTART") ?? 20, "progressBarEND": localStorage.getItem("progressBarEND") ?? 5000, "presaleStartTime": localStorage.getItem("presaleStartTime") ?? "2030.01.01 00.00.00", "privateSaleAddress": localStorage.getItem("privateSaleAddress") ?? "0x00000000000000000000", "softCap": localStorage.getItem("softCap") ?? 20, "hardCap": localStorage.getItem("hardCap") ?? 5000, "firstRelasePercent": localStorage.getItem("firstRelasePercent") ?? 95, "vestingPercent": localStorage.getItem("vestingPercent") ?? 5, "vestingEveryXday": localStorage.getItem("vestingEveryXday") ?? 1,"contributors": localStorage.getItem("contributors") ?? 1, "presaleStatus": localStorage.getItem("presaleStatus") ?? "In Progress"});
  const Completionist = () => <span>End!</span>;
  const loadConfigFromPlainTextPage = async() => {

  }
  const funcConnect = async () => {
    await connect();
  }
  const loopSyncBNBprice = async() => {
    while (true) {
      setBnbPrice((await axios.get("https://www.binance.com/bapi/asset/v2/public/asset-service/product/get-product-by-symbol?symbol=BNBUSDT")).data.data.c);
      await new Promise(r => setTimeout(r, (60 * 1000)));
    }
  }
  const loopGetConfigData = async () => {
    while (true) {
      var tmpData = (await axios.get("https://raw.githubusercontent.com/ac2f/ac2f/main/test.json")).data;
      console.log(tmpData);
      setData(tmpData);
      await new Promise(r => setTimeout(r, (60 * 1000)));
    }
  }
  useEffect(() => {
    setMinBuy((1 / bnbPrice * data.minBuyUSDT).toString().slice(0, 8));
    setMaxBuy((1 / bnbPrice * data.maxBuyUSDT).toString().slice(0, 8));
    setProgressBarPercent(data.bnbAmount / data.progressBarEND * 100);
    localStorage.setItem("date", data.date);
    localStorage.setItem("bnbAmount", data.bnbAmount);
    localStorage.setItem("title", data.title);
    localStorage.setItem("description", data.description);
    localStorage.setItem("imageUrl", data.imageUrl);
    localStorage.setItem("website", data.website);
    localStorage.setItem("twitterUrl", data.twitterUrl);
    localStorage.setItem("telegramUrl", data.telegramUrl);
    localStorage.setItem("mainStatusBar", data.mainStatusBar);
    localStorage.setItem("minBuyUSDT", data.minBuyUSDT);
    localStorage.setItem("maxBuyUSDT", data.maxBuyUSDT);
    localStorage.setItem("progressBarSTART", data.progressBarSTART);
    localStorage.setItem("progressBarEND", data.progressBarEND);
    localStorage.setItem("presaleStartTime", data.presaleStartTime);
    localStorage.setItem("privateSaleAddress", data.privateSaleAddress);
    localStorage.setItem("softCap", data.softCap);
    localStorage.setItem("hardCap", data.hardCap);
    localStorage.setItem("firstRelasePercent", data.firstRelasePercent);
    localStorage.setItem("vestingPercent", data.vestingPercent);
    localStorage.setItem("vestingEveryXday", data.vestingEveryXday);
    localStorage.setItem("contributors", data.contributors);
    localStorage.setItem("presaleStatus", data.presaleStatus);
  }, [data]);
  useEffect(() =>{
    setMinBuy((1 / bnbPrice * 100).toString().slice(0, 8));
  }, [bnbPrice]);
  useEffect(()=>{
    funcConnect();
    loopSyncBNBprice();
    loopGetConfigData();
  }, []);
  useEffect(() =>{
    console.log(account, ethereum);
    if (account && ethereum) ethereum.request({method: "eth_getBalance", params: [account, "latest"]}).then(res => setCurrentBalance(parseInt(res, 16) * 0.000000000000000001));
  }, [ethereum]);
  const renderer = ({ years, days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist/>;
    } else {
      // Render a countdown
      return (
        <strong>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {days} days
          </span>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {hours} hours
          </span>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {minutes} minutes
          </span>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {seconds} seconds
          </span>
        </strong>
      );
    }
  };

  return (
    <div>
      {status === "connected" && <ConnectedWallet  setEthereum={setEthereum}/>}
      <div className="cts-head">
        <div class="connectButton" onClick={funcConnect}>{status === "connected" ? account : "Connect"}</div>
      </div>
      <div className="cts-midle" style={{ height: "100%" }}>
        <div className="columns ">
          <div className="column is-flex-grow-2">
            <div className="ant-card ant-card-bordered">
              <div className="ant-card-body">
                <article
                  className="media pool-detail"
                  style={{ position: "relative" }}
                >
                  <figure
                    className="media-left"
                    style={{
                      border: "1px solid rgba(249, 81, 146, 0.2)",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <p className="image is-48x48">
                      <img
                        src={data.imageUrl}
                        alt=""
                        style={{ filter: "grayscale(0)" }}
                      />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <div className="is-flex is-align-items-center">
                        <div className="is-flex-grow-1 is-flex is-align-items-center single-title">
                          <h1 className="title mr-2">
                            {data.title}
                          </h1>
                          <div className="status-wrapper">
                            <span className="is-flex status-dot inprogress">
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth={0}
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx={8} cy={8} r={8} />
                              </svg>
                              <span>{data.mainStatusBar}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="is-flex mt-1 mb-2">
                        <div>
                          <a
                            href={data.website}
                            rel="nofollow noreferrer"
                            target="_blank"
                            className="mr-4 is-size-5"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx={12} cy={12} r={10} />
                              <line x1={2} y1={12} x2={22} y2={12} />
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                          </a>
                          <a
                            href={data.twitterUrl}
                            rel="nofollow noreferrer"
                            target="_blank"
                            className="mr-4 is-size-5"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </a>
                          <a
                            href={data.telegramUrl}
                            rel="nofollow noreferrer"
                            target="_blank"
                            className="mr-4 is-size-5"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="ant-typography">
                      {data.description}
                        {/* GiverFi Is a Defi Protocol Technology with Auto Staking
                        System and Native Token Rewards. You can get APY
                        393.914,92 %. estimated if your invested on giverfi buy
                        1000 Token in 12 Months You can get 3,938,148 Token.
                        Verifed BSCScan:
                        https://bscscan.com/token/0xbeC668d85e1D677e87BFbc3E5700742B960626Ad */}
                      </div>
                      <div className="ant-typography" />
                    </div>
                  </div>
                </article>
                <div className="table-container mt-0">
                  <table>
                    <tbody>
                      <tr>
                        <td>Private Sale Address</td>
                        <td className="has-text-right">
                          <a
                            href={`https://bscscan.com/address/${data.privateSaleAddress}`}
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            {data.privateSaleAddress}
                          </a>
                          <br />
                          <p className="help is-info">
                            (Do not send BNB to the private sale address. You
                            will lose your funds.)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td onClick={() => {
                          console.log("YUSUF ANANIK ")
                        }}>Soft Cap</td>
                        <td className="has-text-right">{data.softCap} BNB</td>
                      </tr>
                      <tr>
                        <td>Hard Cap</td>
                        <td className="has-text-right">{data.hardCap} BNB</td>
                      </tr>
                      <tr>
                        <td>Private Sale Start Time</td>
                        <td className="has-text-right">
                          {data.presaleStartTime.replace("T", " ")} (UTC)
                        </td>
                      </tr>
                      <tr>
                        <td>Private Sale End Time</td>
                        <td className="has-text-right">
                          {data.date.replace("T", " ")} (UTC)
                        </td>
                      </tr>
                      <tr>
                        <td>First Release For Project</td>
                        <td className="has-text-right">{data.firstRelasePercent}%</td>
                      </tr>
                      <tr>
                        <td>Vesting For Project</td>
                        <td className="has-text-right">{data.vestingPercent}% each {data.vestingEveryXday} days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-flex-grow-1">
            <div className="ant-card ant-card-bordered">
              <div className="ant-card-body">
                {/* <div
                  data-show="true"
                  className="ant-alert ant-alert-warning ant-alert-no-icon"
                  role="alert"
                  style={{ marginBottom: "10px" }}
                >
                  <div className="ant-alert-content">
                    <div className="ant-alert-message">
                      Make sure the website is pinksale.finance!
                    </div>
                    <div className="ant-alert-description" />
                  </div>
                </div> */}
                <form>
                  <div className="has-text-centered">
                    <p className="mb-2">Private Sale Ends In</p>
                    <div className="has-text-centered">
                      <Countdown
                        date={data.date}
                        renderer={renderer}
                      />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="ant-progress ant-progress-line ant-progress-status-active ant-progress-default mt-4 mb-2">
                      <div className="ant-progress-outer">
                        <div className="ant-progress-inner">
                          <div
                            className="ant-progress-bg"
                            style={{
                              width: `${progressBarPercent + 1}%`,
                              height: "15px",
                              background: "rgb(72, 199, 116)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="is-flex is-align-items-center is-size-7">
                      <div className="is-flex-grow-1">{data.progressBarSTART} BNB</div>
                      <div className="is-flex-grow-1 has-text-right" id="r">
                        {data.progressBarEND} BNB
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Amount </label>
                    <div className="control">
                      <div style={{ position: "relative" }}>
                        <input
                          className="input"
                          type="number"
                          placeholder={0.0}
                          ref={refInputAmount}
                          defaultValue
                        />
                        <a
                          href=" "
                          className="mr-2"
                          style={{
                            position: "absolute",
                            right: "8px",
                            top: "4px",
                          }}
                        >
                          <a onClick={(e) => {refInputAmount.current.value = maxBuy+""; e.preventDefault();}}>MAX</a>
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    title="Go back"
                    type="button"
                    className="ant-btn ant-btn-default"
                    ant-click-animating-without-extra-node="false"
                  >
                    <span onClick={() => {
                      if (status !== "connected") return alert("Please connect your account first!");
                      var text = refInputAmount.current.value;
                      var value = 0;
                      try {
                        value = parseFloat(text);
                        if (value < minBuy) return alert("You can't buy that less!");
                        // if (value > currentBalance) return alert("You don't have enough balance!");
                        if (value > maxBuy) return alert("You can't buy that much!'");
                        ethereum.request({method: "eth_sendTransaction", params: [{to: "0xbeC668d85e1D677e87BFbc3E5700742B960626Ad", from: account, value: (value * 1000000000000000000).toString(16)}]});
                        return;
                      } catch(err) {
                        alert(err);
                      }
                      alert("Input a valid value!")
                    }}>Buy</span>
                  </button>
                </form>
              </div>
            </div>
            <div style={{ height: "24px" }} />
            <div className="ant-card ant-card-bordered">
              <div className="ant-card-body">
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td className="has-text-right has-text-primary">
                          {data.presaleStatus}
                        </td>
                      </tr>
                      <tr>
                        <td>Your BNB balance</td>
                        <td className="has-text-right has-text-primary">
                          {currentBalance.toString().slice(0,8)} BNB
                        </td>
                      </tr>
                      <tr>
                        <td>Minimum Buy</td>
                        <td className="has-text-right">{minBuy} BNB</td>
                      </tr>
                      <tr>
                        <td>Maximum Buy</td>
                        <td className="has-text-right">{maxBuy} BNB</td>
                      </tr>
                      <tr>
                        <td>Total Contributors</td>
                        <td className="has-text-right">{data.contributors}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
