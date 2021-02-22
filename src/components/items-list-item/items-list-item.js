import ItemsDescription from '../items-descr/items-description'

export default function ItemsListItem({itemsData}) {
  const arr = []
  const formatingItemsData = data => {
    const translateItemsStats = {
      flat_armor_mod: 'Броня',
      flat_crit_chance_mod: 'Шанс крита',
      flat_hp_pool_mod: 'Здоровье',
      flat_hp_regen_mod: 'Реген здоровья',
      flat_magic_damage_mod: 'Магический урон',
      flat_movement_speed_mod: 'Скорость передвижения',
      flat_mp_pool_mod: 'Мана',
      flat_mp_regen_mod: 'Регенирация здоровья',
      flat_physical_damage_mod: 'Физический урон',
      flat_spell_block_mod: 'Магическая защита',
      percent_attack_speed_mod: 'Скорость атаки (%)',
      percent_life_steal_mod: 'Life steal (%)',
      percent_movement_speed_mod: 'Скорость передвижения (%)',
    }
    const newItemsData = {
      id: data.id,
      name: data.name,
      image_url: data.image_url,
      res: [],
    }

    for (let key in data) {
      if (translateItemsStats[key] && data[key]) {
        newItemsData['res'].push(`${translateItemsStats[key]}: ${data[key]}`)
      }
    }

    arr.push(newItemsData)

    return newItemsData
  }

  itemsData.map(e => {
    return formatingItemsData(e)
  })

  return (
    <div className="p-5 mb-3 mt-3 d-flex align-items-stretch flex-wrap champions rounded">
      {arr.map(item => {
        return (
          <div key={item.id} className="item  text-center">
            <img src={item.image_url} alt="" />
            <h6 className="text-color-lite">{item.name}</h6>
            <ItemsDescription data={item.res} />
          </div>
        )
      })}
    </div>
  )
}
