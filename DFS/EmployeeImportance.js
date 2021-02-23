var GetImportance = function(employees, id) {
    emap = {}
    employees.forEach((emp, i) => emap[emp.id] = i)
    let dfs = (eid) => {
        let ans = employees[eid].importance
        for (let subid of employees[eid].subordinates)
            ans += dfs(emap[subid])
        return ans
    };
    return dfs(emap[id])
};