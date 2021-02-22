import React from 'react'
import Loader from '../loader'

export const ChampionsCard = ({championsData, addLvl, removeLvl, lvl, statsUp}) => {
  const {
    id,
    name,
    big_image_url,
    hp,
    mp,
    attackdamage,
    attackrange,
    armor,
    spellblock,
    hpregen,
    mpregen,
    movespeed,
  } = championsData
  const {hpUp, mpUp, attackUp, armorUp, spellBlockUp, hpRegenUp, mpRegenUp} = statsUp
  if (!championsData) {
    return <Loader />
  }

  return (
    <div>
      <div key={id} className="card p-5 mb-3 mt-3 champions">
        <h5 className="card-title text-center">{name}</h5>
        <div className="champions-content">
          <div className="champions-block">
            <img className="rounded mb-1 champions-img" src={big_image_url} alt="" />
            <span className="champions-bar d-flex justify-content-center align-items-center mb-1 champions-bar__hp">
              {hp}
              <span className="badge badge-info ml-2">{!hpUp ? '' : ` + ${hpUp}`}</span>
            </span>
            <span className="champions-bar d-flex justify-content-center align-items-center champions-bar__mp">
              {mp}
              <span className="badge badge-info ml-2">{!mpUp ? '' : ` + ${mpUp}`}</span>
            </span>
          </div>
          <div className="champions-stats ml-2 p-3">
            <ul className="list-group list-group-flush rounded">
              <li className="list-group-item champions-stats__item">Уровень: {lvl}</li>
              <li className="list-group-item d-flex align-items-center champions-stats__item">
                Урон: {attackdamage}
                <span className="badge badge-info ml-2">
                  {!attackUp ? '' : ` + ${attackUp}`}
                </span>
              </li>
              <li className="list-group-item d-flex align-items-center champions-stats__item">
                Дальность атаки: {attackrange}
              </li>
              <li className="list-group-item d-flex align-items-center champions-stats__item">
                Физический блок: {armor}
                <span className="badge badge-info ml-2">
                  {!armorUp ? '' : ` + ${armorUp}`}
                </span>
              </li>
              <li className="list-group-item d-flex align-items-center champions-stats__item">
                Магический блок: {spellblock}
                <span className="badge badge-info ml-2">
                  {!spellBlockUp ? '' : ` + ${spellBlockUp}`}
                </span>
              </li>
              <li className="list-group-item d-flex align-items-center champions-stats__item">
                Восстановление здоровья: {hpregen}/с
                <span className="badge badge-info ml-2">
                  {!hpRegenUp ? '' : ` + ${hpRegenUp}`}
                </span>
              </li>
              <li className="list-group-item d-flex align-items-center champions-stats__item">
                Восстановление маны: {mpregen}/с
                <span className="badge badge-info ml-2">
                  {!mpRegenUp ? '' : ` + ${mpRegenUp}`}
                </span>
              </li>
              <li className="list-group-item d-flex align-items-center champions-stats__item">
                Скорость передвижения: {movespeed}
              </li>
            </ul>
            <div className="d-flex justify-content-around p-3">
              <button onClick={() => removeLvl()} type="button" className="btn btn-info">
                -1 lvl
              </button>
              <button onClick={() => addLvl()} type="button" className="btn btn-info">
                +1 lvl
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
