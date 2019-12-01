import React from 'react';

export class EmployeeTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [
                {
                    name: "Sanil",
                    age: 21,
                    editing: false,
                },
                {
                    name: "Sanil2",
                    age: 25,
                    editing: false,
                },
                {
                    name: "Sanil3",
                    age: 22,
                    editing: false,
                },
                {
                    name: "Sanil4",
                    age: 21,
                    editing: false,
                },
                {
                    name: "Sanil5",
                    age: 25,
                    editing: false,
                },
                {
                    name: "Sanil6",
                    age: 22,
                    editing: false,
                },
            ]
        };
    }

    deleteFunction(employeeId) {
        const newEmployees = this.state.employees;
        newEmployees.splice(employeeId, 1);
        this.setState({
            employees: newEmployees
        })
    }

    cancelEditingEmployee(employeeId) {
        // const employees = this.state.employees;
        // employees.splice(employeeId, 1);
        // this.setState(
        //     {employees}
        // );
    }
    
    updateEditingEmployee(employeeId, name, age) {
        const employees = this.state.employees;
        console.log(employeeId, name, age)
        employees[employeeId].name = name;
        employees[employeeId].age = age;
        employees[employeeId].editing = false;
        this.setState(
            {employees}
        );
    }

    addNew() {
        const employees = this.state.employees;
        employees.push(
            {name: "", age: "", editing: true}
        )
        this.setState(
            {employees}
        )
    }

    updateFunction(employeeId) {
        const employees = this.state.employees;
        employees[employeeId].editing = true;
        this.setState(
            {employees}
        )
    }

    render() {
        const employees = [];
        for (let i = 0; i < this.state.employees.length; i += 1) {
            const employee = this.state.employees[i];
            if (employee.editing) {
                employees.push(
                    (<EditEmployee key={i} id={i} name={employee.name} age={employee.age} cancelFunction={this.cancelEditingEmployee.bind(this, i)} okFunction={this.updateEditingEmployee.bind(this)}></EditEmployee>)
                )
            }
            else {
                employees.push(
                    (<Employee key={i} name={employee.name} age={employee.age} updateFunction={this.updateFunction.bind(this, i)} deleteFunction={this.deleteFunction.bind(this, i)}></Employee>)
                )
            }
        }

        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    {employees}
                    <tr>
                        <td><button onClick={this.addNew.bind(this)}>Add</button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>
                    <button onClick={this.props.updateFunction.bind("Something")}>Update</button>
                </td>
                <td>
                    <button onClick={this.props.deleteFunction}>Delete</button>
                </td>
            </tr>
        )
    }
}

export class EditEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        };
    }

    onOkClicked() {
        console.log(
            this.props.id,
            this.state.name,
            this.state.age
        )
        this.props.okFunction(
            this.props.id, this.state.name, this.state.age
        );
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    updateAge(event) {
        console.log( event.target.value);
        this.setState({
            age: event.target.value
        });
    }

    render() {
        return (
            <tr>
                <td><input type="text" onChange={this.updateName.bind(this)}></input></td>
                <td><input type="number" onChange={this.updateAge.bind(this)}></input></td>
                <td>
                    <button onClick={this.onOkClicked.bind(this)}>OK</button>
                </td>
                <td>
                    <button onClick={this.props.cancelFunction}>Cancel</button>
                </td>
            </tr>
        )
    }
}