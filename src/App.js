import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  // clear all için useState kullanımı
  return <main>
    <section className="container">
      {/* data içerisindeki kişilerin doğum günü olduğunu yazdırmak için */}
      <h3>{people.length} birthdays today</h3>
      {/* List e people ı props ile gönderdik */}
      <List people = {people} />
      {/* clear All a bastığımız zaman datayı sıfırlamak için */}
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>;
}

export default App;
