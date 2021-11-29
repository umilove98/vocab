import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import VocabListContainer from '../containers/vocabs/VocabListContainer';
import PaginationContainer from '../containers/vocabs/PaginationContainer';

const ListPage = () => {
  return (
    <>
      <HeaderContainer />
      <VocabListContainer />
      <PaginationContainer />
    </>
  );
};

export default ListPage;
