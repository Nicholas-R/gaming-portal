import {useEffect, useState} from 'react'

import ChampionsCard from '../components/champions-card'
import Loader from '../components/loader'

export default function ChampionsDetail({match}) {
  const [championsData, setChampionsData] = useState(null)
  const [currentLvl, setCurrentLvl] = useState(1)
  const [statsUp, setStatsUp] = useState({
    attackUp: 0,
    armorUp: 0,
    hpUp: 0,
    hpRegenUp: 0,
    attackSpeedUp: 0,
    mpUp: 0,
    mpRegenUp: 0,
    spellBlockUp: 0,
  })

  useEffect(() => {
    getChampionsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    chengeStats()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLvl])

  const setUpStats = stats => {
    return Math.round(stats * (currentLvl - 1))
  }

  const chengeStats = () => {
    if (championsData) {
      return setStatsUp(statsUp => ({
        ...statsUp,
        attackUp: setUpStats(championsData.attackdamageperlevel),
        armorUp: setUpStats(championsData.armorperlevel),
        hpUp: setUpStats(championsData.hpperlevel),
        hpRegenUp: setUpStats(championsData.hpregenperlevel),
        attackSpeedUp: setUpStats(championsData.attackspeedperlevel),
        mpUp: setUpStats(championsData.mpperlevel),
        mpRegenUp: setUpStats(championsData.mpregenperlevel),
        spellBlockUp: setUpStats(championsData.spellblockperlevel),
      }))
    }
  }
  const addLvl = () => {
    if (currentLvl === 18) {
      return setCurrentLvl(currentLvl => currentLvl)
    }
    return setCurrentLvl(currentLvl => currentLvl + 1)
  }
  const removeLvl = () => {
    if (currentLvl === 1) {
      return setCurrentLvl(currentLvl => currentLvl)
    }
    return setCurrentLvl(currentLvl => currentLvl - 1)
  }

  const getChampionsData = async () => {
    const _ApiToken = '?token=zRVYUC2XP4H1UmOGVYON__PHT4qSsmhj-t781PgawDfVt0TstFE'
    const championsId = `/${match.params.id}`
    try {
      const result = await fetch(
        `https://api.pandascore.co/lol/champions${championsId}${_ApiToken}`
      )
        .then(res => res.json())
        .then(data => setChampionsData(data))

      return result
    } catch (error) {
      throw new Error('что-то не так...', error.message)
    }
  }

  return (
    <>
      {championsData ? (
        <ChampionsCard
          lvl={currentLvl}
          addLvl={addLvl}
          removeLvl={removeLvl}
          championsData={championsData}
          statsUp={statsUp}
        />
      ) : (
        <Loader />
      )}
    </>
  )
}
