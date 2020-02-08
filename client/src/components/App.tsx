import React from 'react';
import styled from 'styled-components'
import { Redirect, Route, Switch } from 'react-router'
import { GlobalStyle } from '../style/BaseStyle'
import Wrapper from './Atoms/Wrapper'
import Admin from '../cotainers/Pages/Admin'
import ClipLoader from 'react-spinners/ClipLoader'
import { MembersState } from '../reducers/membersReducer';

const LoadingWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  background-color: rgba(255,255,255,0.5);
`


const wrapperStyle = {
  position: 'absolute',
  right: '0',
  left: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  text_align: 'center',
  z_index: '100000'
} as const

interface Props {
  members: MembersState
}

const App: React.FC<Props> = props => {
  return (
    <>
      <GlobalStyle />
      <Wrapper styled={{bgColor:'#F9F9F9',min_height:"100vh"}}>
      {
        props.members.isLoading? 
        <LoadingWrapper>
          <Wrapper styled={{...wrapperStyle}}>
            <ClipLoader size={200} color={"#9370db"} loading={true} />
          </Wrapper>
        </LoadingWrapper>
        : null
      }
      
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Wrapper>
    </>
  )
}

export default App;
