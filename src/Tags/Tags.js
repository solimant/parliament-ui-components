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
import PropTypes from 'prop-types'

import { cloneElement } from '../utils'
import { Tag } from './Tag'

import '@spectrum-css/tags'

const Tags = ({ children, items = [], onDelete, ...props }) => {
  const childrenArray = React.Children.toArray(children)
  return (
    <div className='spectrum-Tags' role='list' aria-label='list' {...props}>
      {items.map((item, index) => (
        <Tag
          key={index}
          onDelete={onDelete}
          isInvalid={item.invalid}
          isDisabled={item.disabled}
          isDeletable={item.deletable}
        >
          {item.name}
        </Tag>
      ))}
      {childrenArray.map((item, index) => {
        console.log(item)
        return cloneElement(item, {
          onDelete
        })
      })}
    </div>
  )
}

Tags.propTypes = {
  items: PropTypes.array
}

export { Tags }