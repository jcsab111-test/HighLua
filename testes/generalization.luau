local inventory = {"Sword", "Shield", "Potion"}
local prices = { Sword = 50, Shield = 30 }

-- No ipairs needed
for i, item in inventory do
    print(i, item)
end

-- No pairs needed
for name, cost in prices do
    print(name, "costs", cost)
end
