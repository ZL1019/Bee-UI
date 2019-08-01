import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from "@vue/test-utils";
import Validate from "@/components/validate";


describe("Validate", () => {
  it('Validate: 存在.', () => {
    expect(Validate).to.exist
  });
  it('Validate: Email 为空返回：必填', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key:'email', required:true}
    ]
    let errors = Validate(data,rules)
    expect(errors.email.required).to.eq('必填')
  });
  it('Validate: Email 为 0 不返回：必填', () => {
    let data = {
      email: '0'
    }
    let rules = [
      {key:'email', required:true}
    ]
    let errors = Validate(data,rules)
    expect(errors.email).to.not.exist
  });
  it('Validate: Email 格式不对返回：格式不正确', () => {
    let data = {
      email: '@123.com'
    }
    let rules = [
      {key:'email', pattern: /^.+@.+$/ }
    ]
    let errors = Validate(data,rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  });
  it('Validate: Email 格式正确不返回：格式不正确', () => {
    let data = {
      email: '123@qq.com'
    }
    let rules = [
      {key:'email', pattern: /^.+@.+$/ }
    ]
    let errors = Validate(data,rules)
    expect(errors.email).to.not.exist
  });
  it('Validate: Email 为空只返回：必填', () => {
    let data = {
      email: ''
    }
    let rules = [
      {key:'email', pattern: /^.+@.+$/, required: true}
    ]
    let errors = Validate(data,rules)
    console.log('errors: ', errors);
    expect(errors.email.required).to.eq('必填')
    expect(errors.email.pattern).to.not.exist
  });
});