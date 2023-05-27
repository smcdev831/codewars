def hello(name = "World")
  if name.length > 0 && name.length != nil
    return "Hello, #{name.capitalize}!"
  else
    return "Hello, World!"
  end
end
