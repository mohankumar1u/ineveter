import React from 'react'
import { Pie,Bar } from 'react-chartjs-2';
import 'chart.js/auto';


export default function Analysis() {
    const storeData = {
        "Store Name": "Rangeela",
        "Store Number": "1156",
        "Address": "70 Bridgeport Road East, Waterloo, ON N2J 2J9",
        "Phone Number": "519-746-1378",
        "Subtotal": "$24.06",
        "Payment Method": "Mastercard (** ** ** 9471 RF)",
        "Items": [
          {
            "Item": "Limes",
            "Quantity": 1,
            "Price per Unit": "$2.47",
            "Total Price": "$2.47"
          },
          {
            "Item": "Bananas",
            "Quantity": 6,
            "Price per Unit": "$0.77",
            "Total Price": "$4.62"
          },
          {
            "Item": "Demp 100W",
            "Quantity": 1,
            "Price per Unit": "$3.47",
            "Total Price": "$3.47"
          },
          {
            "Item": "Dimp MH 500G",
            "Quantity": 1,
            "Price per Unit": "$3.97",
            "Total Price": "$3.97"
          },
          {
            "Item": "Crd Pnapl",
            "Quantity": 1,
            "Price per Unit": "$5.47",
            "Total Price": "$5.47"
          }
        ]
      };
      const pieData = {
        labels: storeData.Items.map(item => item.Item),
        datasets: [
          {
            data: storeData.Items.map(item => parseFloat(item['Total Price'].substring(1))), // Extract numeric prices
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
          }
        ]
      };
      const barData = {
        labels: storeData.Items.map(item => item.Item),
        datasets: [
          {
            label: 'Total Price ($)',
            data: storeData.Items.map(item => parseFloat(item['Total Price'].substring(1))), // Extract numeric prices
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      };
      
      const barOptions = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
  return (
    <div><div className='data-dispaly-block'>

    {/* Display the pie chart */}
    <section className='pie-chart'>
      <h2>Cost Distribution</h2>
      <Pie className='pie' data={pieData} />
    </section>
    <section className='bar-chart'>
      <h2>Cost Distribution (Bar Chart)</h2>
      <Bar className='bar' data={barData} options={barOptions} />
    </section>

    </div>
    <section className='data-table'>
      <h2>Items Purchased</h2>
      <table className="items-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price per Unit</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {storeData.Items.map((item, index) => (
            <tr key={index}>
              <td>{item.Item}</td>
              <td>{item.Quantity}</td>
              <td>{item['Price per Unit']}</td>
              <td>{item['Total Price']}</td>
            </tr>
          ))}
          <tr key={storeData.Items.length}>
          <td colSpan={3}><b>Grand Total</b></td>
          <td>$20</td>
          </tr>
        </tbody>
      </table>
    </section></div>
  )
}
