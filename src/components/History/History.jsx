import styles from "./History.module.css";

const History = ({item}) => {
  console.log(item)
  if (item[0] === 'transfer') {
    return <tbody className={styles.preview}>
    <tr>
      <td className={styles.rowan}>Unlimited Time</td>
      <td className={styles.root}>Transfer {item[1].amount} to {item[1].to}</td>
      <td className={styles.empty}>{" "}</td>
    </tr>
    </tbody>
  } else if (item[0] === 'curation_reward') {
    return <tbody className={styles.preview}>
    <tr>
      <td className={styles.rowan}>Unlimited Time</td>
      <td className={styles.root}>Claim Rewards: {item[1].reward}</td>
      <td className={styles.empty}>{" "}</td>
    </tr>
    </tbody>
  } else if (item[0] === 'claim_reward_balance') {
    return <tbody className={styles.preview}>
    <tr>
      <td className={styles.rowan}>Unlimited Time</td>
      <td className={styles.root}>{item[1].account} Claim Reward Blance {item[1].reward_vests}</td>
      <td className={styles.empty}>{" "}</td>
    </tr>
    </tbody>
  } else {
    return <tbody className={styles.preview}>
    <tr>
      <td className={styles.rowan}>Unlimited Time</td>
      <td className={styles.root}>{item[1].author} Reward Cliam {item[1].sbd_payout} & {item[1].vesting_payout}</td>
      <td className={styles.empty}>{" "}</td>
    </tr>
    </tbody>
  }
};

export default History;
