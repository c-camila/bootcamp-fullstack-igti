import React, { Component } from 'react';

export default class ProportionBar extends Component {
  render() {
    const {
      inss,
      irpf,
      netSalary,
      colorINSS = '#E57F84',
      colorIRPF = '#4297A0',
      colorNetSalary = '#2F5061',
    } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            backgroundColor: colorINSS,
            width: inss + '%',
            height: '20px',
          }}
        />
        <div
          style={{
            backgroundColor: colorIRPF,
            width: irpf + '%',
            height: '20px',
          }}
        />
        <div
          style={{
            backgroundColor: colorNetSalary,
            width: netSalary + '%',
            height: '20px',
          }}
        />
      </div>
    );
  }
}
