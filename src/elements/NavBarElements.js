// @flow
import styled from 'react-emotion'
import { EASE, SPEED, Z } from '../constants/styles'

export default undefined

export const Nav = styled.nav(
  {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: Z.NAVBAR,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  props => ({
    pointerEvents: props.isOpen ? null : 'none',
  }),
)

export const Toggle = styled.button(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 84,
    height: 84,
    pointerEvents: 'auto',
    color: '#fff',
    transition: `transform 0.66666s ${EASE.IN_OUT_CUBIC}`,
  },
  props => ({
    transform: props.isOpen ? 'rotate(720deg)' : null,
  }),
)

// -------------------------------------

const openedNavLinks = {
  transform: 'translate3d(0, 6rem, 0)',
  transitionDelay: '0.1s',
  opacity: 1,
}

const closedNavLinks = {
  transform: 'translate3d(0, 100%, 0)',
  opacity: 0,
}

export const NavLinks = styled.div(
  {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    transition: `transform ${SPEED} ${EASE.IN_OUT}, opacity ${SPEED}`,
  },
  props => ({
    ...(props.isOpen ? openedNavLinks : closedNavLinks),
  }),
)

export const NavLink = styled.a({
  fontSize: '1.125rem',
  textTransform: 'uppercase',
  textDecoration: 'none',
  marginBottom: '1.25em',
})

export const Gradient = styled.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundImage: 'linear-gradient(-180deg, #ff0092 1%, #d800ff 100%)',
    transition: `opacity ${SPEED}`,
  },
  props => ({
    opacity: props.isOpen ? 1 : 0,
  }),
)