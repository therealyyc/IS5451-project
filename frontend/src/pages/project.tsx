import styled from 'styled-components';

const Project = () => {
  return (<div>
    <svg className="icon" aria-hidden="true">
      <use xlinkHref="#icon-users"></use>
    </svg>
  </div>)
}

export default Project

const Container = styled.section`
  width: 100%;
  height: calc(100% - 77px);
  display: flex;
  .side-bar {
    height: 100%;
  }
`

const Content = styled.section`
  flex: 1;
  background-color: #fff;
`

const ProjectDetail = styled.section`
  flex: 0 0 300px;
  background: #E0E6E980;
;
`


