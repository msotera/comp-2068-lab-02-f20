import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #383636;
    display: flex;
    align-items: center;
    height: 80px;

    ul {
      display: flex;
      padding: 0;
      margin: 0;

      li {
        list-style: none;

        a {
          color: #df5200;
          text-decoration: none;
          padding: 1em;

          &:hover {
            color: #008afc;
            text-decoration: line-through;
          }
        }
      }
    }
  `
};