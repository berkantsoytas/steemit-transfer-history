import {useRef, useState} from "react";
import axios from "axios";
import Card from "./components/ui/Card";
import HistoryList from "./components/History/HistoryList";

import styles from "./App.module.css";

function App() {
  const [history, setHistory] = useState([]);
  const input = useRef();

  const searchHandler = () => {
    const data = JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_state",
        [`/@${input.current.value}/transfers`],
      ],
    });
    const requestOptions = {
      method: "post",
      url: "https://api.steemit.com/?id=384690&method=market_history_api.get_market_history&params",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(requestOptions)
      .then((response) => {
        for (const [key, value] of Object.entries(response.data.result.accounts)) {
          return setHistory(value.transfer_history)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Card>
        <div className="content-app">
          <div className={styles.searchcontent}>
            <input
              type="text"
              placeholder="Enter a Username"
              className={styles.input}
              ref={input}
            />
            <input
              type="submit"
              onClick={searchHandler}
              className={styles.button}
            />
          </div>
          <HistoryList history={history}/>
        </div>
      </Card>
    </div>
  );
}

export default App;
