import React from 'react';
import UserCreate from '../userCreate';
import { LanguageStore } from '../../contexts/languageContext';
import ColorContext from '../../contexts/colorContext';
import LanguageSelector from '../LanguageSelector';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;