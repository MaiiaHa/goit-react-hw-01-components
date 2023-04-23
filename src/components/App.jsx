// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
//===============================

import Profile from './profile/Profile';
import user from '../../src/data/user.json';
import Statistics from './statistics/Statistics';
import data from '../../src/data/data.json';
import FriendList from './friendlist/FriendList';
import friends from '../../src/data/friends.json';
// import FriendListItem from './friendsListItem/FriendListItem';
import transactions from '../../src/data/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        avatarUrl={user.avatar}
        name={user.username}
        location={user.location}
        tag={user.tag}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}>{/* <FriendListItem /> */}</FriendList>
      ;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
