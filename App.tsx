import React, { useState, useEffect } from 'react';

import { User, onAuthStateChanged } from 'firebase/auth';

import { FIREBASE_AUTH } from './firebaseConfig';

import ChatStack from './src/navigation/chatStack/ChatStack';
import AuthStack from './src/navigation/authStack/AuthStack';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const auth = FIREBASE_AUTH;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  if (user) return <ChatStack />;

  return <AuthStack />;
};

export default App;
