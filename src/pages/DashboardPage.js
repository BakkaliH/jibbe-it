import Page from '../components/Page';
import React from 'react'




class DashboardPage extends React.Component {

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
         
      </Page>
    );
  }
}

export default DashboardPage;