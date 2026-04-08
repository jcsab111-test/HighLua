local user = "sesesesese"
local version = 2.5

-- Much cleaner than "Hello " .. user .. "!"
local message = `Welcome back, {user}! You are running version {version + 0.1}.`

print(message)
