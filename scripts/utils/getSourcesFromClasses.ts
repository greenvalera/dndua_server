const getSourcesFromClasses = (classes) => {
  return classes
    .map((classUnit): Array<any> => {
      const sources = classUnit.subclasses.
      map(subclass => subclass.source).
      filter(source => source);

      return [...new Set(sources)];
    })
    .filter(array => array.length)
    .reduce((previousValue, currentValue) => {
      for (const i in currentValue) {
        previousValue.push(currentValue[i]);
      }
      return previousValue;
    }, []);
}

export default getSourcesFromClasses;
