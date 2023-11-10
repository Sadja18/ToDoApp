import { Task } from '@wasp/entities'
import { GetTasks } from '@wasp/queries/types'
import HttpError from '@wasp/core/HttpError.js'

export const getTasks: GetTasks<void, Task[]> = async (args, context) => {
    if (!context.user) {
        throw new HttpError(401)
    }
    const result = context.entities.Task.findMany({
        orderBy: { id: 'asc' },
    });
    console.log('getTasks gave : ', result)
    return result;
}