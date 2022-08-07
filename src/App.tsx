// import React from 'react';
// import { Table } from './components/Table/Table';

// const column = [
//   {
//     title: 'Strategy',
//     dataIndex: 'strategy',
//     key: 'strategy',
//   },
//   {
//     title: 'Returns',
//     dataIndex: 'returns',
//     key: 'returns',
//   },
//   {
//     title: 'Action',
//     dataIndex: 'action',
//     key: 'action',
//   },
// ];
// const trade_column = [
//   {
//     title: 'Instrument Symbol',
//     dataIndex: 'trade_instrument_symbol',
//     key: 'trade_instrument_symbol',
//   },
//   {
//     title: 'Returns',
//     dataIndex: 'trade_returns',
//     key: 'trade_returns',
//     render: (text: string, record: any) => (
//       <div style={{
//         color: record.trade_returns > 0 ? 'blue' : 'green',
//       }}>
//         {text}
//       </div>
//     )
//   },
//   {
//     title: 'Action',
//     dataIndex: 'action',
//     key: 'action',
//   },
// ];

// const data = [
//   {
//     key: '1',
//     strategy: 'Strategy 1',
//     trades: (
//       <Table
//         columns={trade_column}
//         data={[
//           {
//             key: '1',
//             trade_instrument_symbol: 'AAPL',
//             trade_returns: '+0.5%',
//             action: 'Buy',
//           },
//           {
//             key: '2',
//             trade_instrument_symbol: 'MSFT',
//             trade_returns: '+0.5%',
//             action: 'Buy',
//           },
//         ]}
//       />
//     ),
//   },
//   {
//     key: '2',
//     strategy: 'Strategy 2',
//     trades: (
//       <Table
//         columns={trade_column}
//         data={[
//           {
//             key: '3',
//             trade_instrument_symbol: 'RELIANCE',
//             trade_returns: '+0.5%',
//             action: 'Buy',
//           },
//           {
//             key: '4',
//             trade_instrument_symbol: 'MARUTI',
//             trade_returns: '+0.5%',
//             action: 'Buy',
//           },
//         ]}
//       />
//     ),
//   },
// ];

// const App = () => {
//   return (
//     <Table
//       columns={column}
//       data={data}
//       expandable={{
//         expandedRowRender: (record) => <>{record.trades}</>,
//         expandIcon: ({ expanded, onExpand, record }) =>
//           expanded ? (
//             <IoIosArrowDown
//               className='cursor-pointer'
//               onClick={() => onExpand(record)}
//             />
//           ) : (
//             <IoIosArrowForward
//               className='cursor-pointer'
//               onClick={() => onExpand(record)}
//             />
//           ),
//       }}
//     />
//   );
// };

// export default App;
import Table from './components/Table/Table';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { useState } from 'react';

const App = () => {
  const column = [
    {
      title: 'Strategy',
      dataIndex: 'strategy',
      key: 'strategy',
      render: (text: string, record: any) => (
        <div
          style={{
            backgroundColor: '#f5f5f5',
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'Returns',
      dataIndex: 'returns',
      key: 'returns',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const trade_column = [
    {
      title: 'Instrument Symbol',
      dataIndex: 'trade_instrument_symbol',
      key: 'trade_instrument_symbol',
    },
    {
      title: 'Returns',
      dataIndex: 'trade_returns',
      key: 'trade_returns',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const [activeTrade, setActiveTrade] = useState('');

  const data = [
    {
      key: '1',
      strategy: 'Strategy 1',
      returns: '+0.5%',
      action: 'Buy',
      trades: (
        <Table
          columns={trade_column}
          data={[
            {
              key: '1',
              trade_instrument_symbol: 'AAPL',
              trade_returns: '+0.5%',
              action: 'Buy',
            },
            {
              key: '2',
              trade_instrument_symbol: 'MSFT',
              trade_returns: '+0.5%',
              action: 'Buy',
            },
          ]}
          expandable={{
            expandedRowRender: (record) => <>{record.action}</>,
            expandIcon: ({ expanded, onExpand, record }) =>
              expanded ? (
                <IoIosArrowDown
                  className='cursor-pointer'
                  onClick={() => {
                    onExpand(expanded, record)
                    setActiveKey(record.key)
                  }}
                />
              ) : (
                <IoIosArrowForward
                  className='cursor-pointer'
                  onClick={() => {
                    onExpand(expanded, record)
                    setActiveKey(record.key)
                  }}
                />
              ),
              expandedRowKeys: [activeTrade],
          }}
        />
      ),
    },
    {
      key: '2',
      strategy: 'Strategy 2',
      returns: '+0.5%',
      action: 'Buy',
      trades: (
        <Table
          columns={trade_column}
          data={[
            {
              key: '3',
              trade_instrument_symbol: 'RELIANCE',
              trade_returns: '+0.5%',
              action: 'Buy',
            },
            {
              key: '4',
              trade_instrument_symbol: 'MARUTI',
              trade_returns: '+0.5%',
              action: 'Buy',
            },
          ]}
        />
      ),
    },
  ];

  const [activeKey, setActiveKey] = useState('');

  return (
    <>
      <Table
        columns={column}
        data={data}
        expandable={{
          expandedRowRender: (record) => <>{record.trades}</>,
          expandIcon: ({ expanded, onExpand, record }) =>
            expanded ? (
              <IoIosArrowDown
                className='cursor-pointer'
                onClick={() => {
                  onExpand(expanded, record);
                  setActiveKey(record.key);
                }}
              />
            ) : (
              <IoIosArrowForward
                className='cursor-pointer'
                onClick={() => {
                  onExpand(expanded, record);
                  setActiveKey(record.key);
                }}
              />
            ),
          expandedRowKeys: [activeKey],
        }}
      />
    </>
  );
};

export default App;
