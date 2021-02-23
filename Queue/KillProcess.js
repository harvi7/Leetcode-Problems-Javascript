var killProcess = function(pid, ppid, kill) {
    const children = new Map(), killedProcesses = []

    for (let i = 0; i < ppid.length; i++) {
        if (ppid[i] > 0) {
          if (children.has(ppid[i])) 
            children.get(ppid[i]).push(pid[i])
          else 
            children.set(ppid[i], [pid[i]])
        }
    }
    
    const queue = [kill]
    while (queue.length > 0) {
        const processToKill = queue.pop(0)

        killedProcesses.push(processToKill)

        if (children.has(processToKill))
          queue.push(...children.get(processToKill))
    }

    return killedProcesses
};