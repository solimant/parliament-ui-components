/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import React from 'react'
import { RequestMaker, Body, HeaderParameters, QueryParameters } from '../index'

export default {
  title: 'components/RequestMaker'
}

export const RequestMakerDefault = () => {
  const props = {
    method: 'GET',
    url: 'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <HeaderParameters name='one'>header one</HeaderParameters>
      <HeaderParameters name='two'>header two</HeaderParameters>
      <QueryParameters name='one'>query one</QueryParameters>
      <QueryParameters name='two'>query two</QueryParameters>
      <Body type='raw'>This is my body</Body>
    </RequestMaker>
  )
}

export const RequestMakerNoBody = () => {
  const props = {
    method: 'GET',
    url: 'https://adobeioruntime.net/api/v1/web/io-solutions/default/requestMaker'
  }

  return (
    <RequestMaker {...props}>
      <HeaderParameters name='one'>header one</HeaderParameters>
      <HeaderParameters name='two'>header two</HeaderParameters>
      <QueryParameters name='one'>query one</QueryParameters>
      <QueryParameters name='two'>query two</QueryParameters>
    </RequestMaker>
  )
}
