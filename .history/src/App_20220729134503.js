import "./App.css";
import Countdown from "react-countdown";

function App() {
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ years, days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <strong>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {days}
          </span>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {hours}
          </span>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {minutes}
          </span>
          <span
            className="p-2 has-background-danger-light mr-2"
            style={{ borderRadius: "4px" }}
          >
            {seconds}
          </span>
        </strong>
      );
    }
  };

  return (
    <div>
      <div className="cts-head">
        <div class="connectButton">Connect</div>
        <Countdown date={"2024-02-01T01:02:03"} renderer={renderer} />
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
                        src="https://giverfi.com/images/giverfi-pinksale.png"
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
                            Giver Finance Private Sale
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
                              <span>Sale Live</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="is-flex mt-1 mb-2">
                        <div>
                          <a
                            href="https://giverfi.com/"
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
                            href="https://twitter.com/GiverFi"
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
                            href="https://t.me/GiverFi_chat"
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
                        GiverFi Is a Defi Protocol Technology with Auto Staking
                        System and Native Token Rewards. You can get APY
                        393.914,92 %. estimated if your invested on giverfi buy
                        1000 Token in 12 Months You can get 3,938,148 Token.
                        Verifed BSCScan:
                        https://bscscan.com/token/0xbeC668d85e1D677e87BFbc3E5700742B960626Ad
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
                            href="https://bscscan.com/address/0xe447A39d14D72CBbB92A060C1b52c6A1C78b4D6D"
                            target="_blank"
                            rel="noreferrer nofollow"
                          >
                            0xe447A39d14D72CBbB92A060C1b52c6A1C78b4D6D
                          </a>
                          <br />
                          <p className="help is-info">
                            (Do not send BNB to the private sale address. You
                            will lose your funds.)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>Soft Cap</td>
                        <td className="has-text-right">2,500 BNB</td>
                      </tr>
                      <tr>
                        <td>Hard Cap</td>
                        <td className="has-text-right">5,000 BNB</td>
                      </tr>
                      <tr>
                        <td>Private Sale Start Time</td>
                        <td className="has-text-right">
                          2022.07.26 19:40 (UTC)
                        </td>
                      </tr>
                      <tr>
                        <td>Private Sale End Time</td>
                        <td className="has-text-right">
                          2023.08.31 13:00 (UTC)
                        </td>
                      </tr>
                      <tr>
                        <td>First Release For Project</td>
                        <td className="has-text-right">95%</td>
                      </tr>
                      <tr>
                        <td>Vesting For Project</td>
                        <td className="has-text-right">5% each 1 days</td>
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
                <div
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
                </div>
                <form>
                  <div className="has-text-centered">
                    <p className="mb-2">Private Sale Ends In</p>
                    <div className="has-text-centered">
                      <Countdown
                        date={"2024-02-01T01:02:03"}
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
                              width: "50.002%",
                              height: "15px",
                              background: "rgb(72, 199, 116)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="is-flex is-align-items-center is-size-7">
                      <div className="is-flex-grow-1">20.01 BNB</div>
                      <div className="is-flex-grow-1 has-text-right">
                        5,000 BNB
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
                          <b>MAX</b>
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
                    <span>Enable BNB</span>
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
                          inprogress
                        </td>
                      </tr>
                      <tr>
                        <td>Your BNB balance</td>
                        <td className="has-text-right has-text-primary">
                          0 BNB
                        </td>
                      </tr>
                      <tr>
                        <td>Minimum Buy</td>
                        <td className="has-text-right">10 BNB</td>
                      </tr>
                      <tr>
                        <td>Maximum Buy</td>
                        <td className="has-text-right">1,000 BNB</td>
                      </tr>
                      <tr>
                        <td>Total Contributors</td>
                        <td className="has-text-right">1</td>
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
