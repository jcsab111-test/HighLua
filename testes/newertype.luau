type Shape = "Circle" | "Square"

local function getArea(shape: Shape)
    if shape == "Circle" then
        return "Pi * r^2"
    elseif shape == "Square" then
        return "s^2"
    else
        -- If a new shape is added to the type but not handled here,
        -- Luau will throw a type error because 'shape' becomes 'never'.
        local _exhaustiveCheck: never = shape
        return _exhaustiveCheck
    end
end
