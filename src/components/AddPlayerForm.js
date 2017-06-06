import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '' };
  }

  // onNameChange(e) {
  //   this.setState({ name: '' });
  // }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: '' });
  }

  render() {
    const FormItem = Form.Item;
    return (
      <Form layout="inline" onSubmit={this.onSubmit}>
        <FormItem>
          <Input
            placeholder="Add a player..."
            style={{ fontSize: 16 }}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </FormItem>
        <FormItem>
          <Button
            shape="circle"
            icon="user-add"
            htmlType="submit"
          />
        </FormItem>
      </Form>
    );
  }
}

AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddPlayerForm;
