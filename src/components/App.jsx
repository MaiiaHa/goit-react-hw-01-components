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

import user from '../../src/data/user.json';
import Profile from './profile/Profile';

import data from '../../src/data/data.json';
import Statistics from './statistics/Statistics';

import friends from '../../src/data/friends.json';
import FriendList from './friendlist/FriendList';

import transactions from '../../src/data/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';

import Section from './section/Section';

export default function App() {
  return (
    <div>
      <Section title="1 - Social network profile">
        <Profile
          avatarUrl={user.avatar}
          name={user.username}
          location={user.location}
          tag={user.tag}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>

      <Section title="2 - Statistics">
        <Statistics title="Upload stats" stats={data} />
      </Section>

      <Section title="3 - FriendList">
        <FriendList friends={friends} />
      </Section>

      <Section title="4 - TransactionHistory">
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
