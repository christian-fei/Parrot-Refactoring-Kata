const PARROT_TYPES = {
  EUROPEAN: 'EUROPEAN',
  AFRICAN: 'AFRICAN',
  NORWEGIAN_BLUE: 'NORWEGIAN_BLUE'
}

module.exports = {
  PARROT_TYPES,
  Parrot
}

function Parrot (type, numberOfCoconuts, voltage, isNailed) {
  return {
    getSpeed,
    getBaseSpeedWithVoltage,
    getLoadFactor,
    getBaseSpeed
  }

  function getSpeed () {
    switch (type) {
      case PARROT_TYPES.EUROPEAN:
        return getBaseSpeed()
      case PARROT_TYPES.AFRICAN:
        return Math.max(0, getBaseSpeed() - getLoadFactor() * numberOfCoconuts)
      case PARROT_TYPES.NORWEGIAN_BLUE:
        return (isNailed) ? 0 : getBaseSpeedWithVoltage(voltage)
    }
    throw new Error('Should be unreachable')
  }

  function getBaseSpeedWithVoltage (voltage) {
    return Math.min(24, voltage * getBaseSpeed())
  }

  function getLoadFactor () {
    return 9
  }

  function getBaseSpeed () {
    return 12
  }
}
