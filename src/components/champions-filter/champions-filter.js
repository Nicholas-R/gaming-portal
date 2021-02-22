import React from 'react'
import {useDispatch} from 'react-redux'

import {setSortValue} from '../../redux/actions'

export default function ChampionsFilter() {
  const dispatch = useDispatch()

  const filterData = [
    {
      value: 'name',
      label: 'имени',
    },
    {
      value: 'armor',
      label: 'броне',
    },
    {
      value: 'spellblock',
      label: 'показателю магической защиты',
    },
    {
      value: 'attackdamage',
      label: 'атаке',
    },
    {
      value: 'attackrange',
      label: 'дальности атаки',
    },
    {
      value: 'attackspeedoffset',
      label: 'скорости атаки',
    },
    {
      value: 'hp',
      label: 'показателю здоровья',
    },
    {
      value: 'mp',
      label: 'показаелю маны',
    },
  ]

  return (
    <div className="input-group filter-group">
      <div className="input-group-prepend">
        <label className="input-group-text bg-info text-white border-0" htmlFor="select">
          Сортировка по
        </label>
      </div>
      <select
        onChange={event => dispatch(setSortValue(event.target.value))}
        name="select"
        id="select"
        className="form-select form-select-lg custom-select filter-group-input"
      >
        {filterData.map((option, i) => (
          // eslint-disable-next-line no-restricted-globals
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
