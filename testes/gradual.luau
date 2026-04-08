--!strict

type Vector = { x: number, y: number }

local function addVectors(a: Vector, b: Vector): Vector
    return {
        x = a.x + b.x,
        y = a.y + b.y
    }
end

local pos1 = { x = 10, y = 20 }
local pos2 = { x = 5, y = 5 }

print(addVectors(pos1, pos2).x) -- Output: 15
