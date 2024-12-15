function buildHierarchyTitle<T extends Record<string, any>>(
    data: T[],
    PrimaryKey: keyof T,
    TitleKey: keyof T,
    ParentKey: keyof T
  ): T[] {
    const idMap = new Map<any, T>();
  
    // Create a map for quick lookup of items by Id
    data.forEach((item) => {
      idMap.set(item[PrimaryKey], item);
    });
  
    // Recursive function to build the title path
    function getFullTitle(item: T): string {
      if (item[ParentKey] === 0) {
        return item[TitleKey];
      }
      const parent = idMap.get(item[ParentKey]);
      if (parent) {
        return getFullTitle(parent) + " >> " + item[TitleKey];
      }
      return item[TitleKey]; // Fallback in case of missing parent
    }
  
    // Update the Title with the full path for each item
    return data.map((item) => ({
      ...item,
      [TitleKey]: getFullTitle(item),
    }));
}

module.exports=buildHierarchyTitle;