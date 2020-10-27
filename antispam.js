const input = [
  'GALAXY-42/SYSTEM/PLANET:{}',
  'GALAXY-42/SYSTEM/PLANET:{Code}',
  'GALAXY-42/System/PLANET:{Code}',
  'GALAXY-42/SYSTEM/PLANET{Code}',
  'LONGGALAXY-42/SYSTEM/PLANET:{Code}',
  'GALAXY-4/SYSTEM/PLANET:{Code}',
  'GALAXY-4815162342/SYSTEM/PLANET:{Code}',
  'GALAXY-42/THE-SOLAR-SYSTEM/PLANET:{Code}',
  'GALAXY-42/-SYSTEM/PLANET:{Code}',
  'GALAXY-42/SYSTEM1/PLANET:{Code}',
  'GALAXY-42/SYS--TEM/PLANET:{Code}',
  'GALAXY-42/LANGUAGE/JAVA:{Code}',
  'GALAXY-42/LANGUAGE/SCALA:{Code}',
  'GALAXY-42/LANGUAGE/JS:{Code}',
  'GALAXY-42/LANGUAGE/PYTHON:{Code}',
  'GALAXY-42/SYSTEM/PLANET:{Simple text... @null == undefined@}',
  'GALAXY-42/SYSTEM/PLANET:{@typeof null@@typeof typeof null@}',
];

function antispam(input) {
  const result = input.filter((item) => {
    let isNotSpam = true;
    const [address, codeBr] = item.split(':');
    console.log('antispam -> codeBr', codeBr);

      const [galaxy, system, planet] = address.split('/');
      const [galaxyName, galaxyNum] = galaxy.split('-');
      const systemIsNotRight = /-{2}/.test(system) || system.match(/^/) === '-';
    

    if (!codeBr || galaxyName.length > 8 || galaxyNum.length > 8 || systemIsNotRight) {
      isNotSpam = false;
    }

    return isNotSpam;
  });

  return result;
}

antispam(input);
console.log(antispam(input), antispam(input).length);
