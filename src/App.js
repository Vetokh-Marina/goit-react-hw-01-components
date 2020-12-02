import user from './components/Profile/user.json';
import Profile from './components/Profile/profile';
import Section from './components/Section/section';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';



  function App() {
  return (
    <Section>
       <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Section>
        <Statistics title="Upload stats" stats={statisticalData} />;
      </Section>
      {/* <Section>
        <FriendList friends={friends} />;
      </Section> */}
      

      {/* <FriendList friends={friends} /> */}

      {/* <TransactionHistory items={transactions} /> */}
    </Section>
  );
 }
export default App;