import React, { Component } from "react";
export class MainContent extends Component {
  state = {
    appTitle: "Customers",
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "111-111",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Allen",
        phone: "222-222",
        address: { city: "Bengaluru" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "James",
        phone: "333-333",
        address: { city: "Mumbai" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "John",
        address: { city: "Chennai" },
        photo: "https://picsum.photos/id/1013/60",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.appTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customerCount}
          </span>
          {/* Event handling */}
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
          <h4>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Customer Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>{this.getCustomerRow()}</tbody>
            </table>
          </h4>
        </div>
      </React.Fragment>
    );
  }

  //benefit of arrow class is that this keyword refers to component
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };
  //Render methods
  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            {/* alt is used when the image is not loaded */}
            <img src={cust.photo} alt="Customer" />
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}
