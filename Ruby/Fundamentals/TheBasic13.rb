def print1to255
    for i in 1..255
      puts i
    end
  end
  def printOdd1to255
    for i in 1..255
      next if (i % 2) == 0
      puts i
    end
  end
  def printSum1to255
    sum = 0
    for i in 1..255
      sum += i
      puts "New number: " + i.to_s + " Sum: " + sum.to_s
    end
  end
  def iterateArray(arr)
    for i in arr
      puts i
    end
  end
  def findMax(arr)
    max = arr[0]
    for i in arr
      if i > max 
        max = i
      end
    end
    puts max
    return max
  end
  def findAverage(arr)
    sum = 0
    for i in arr
      sum += i
    end
    puts sum/arr.length
  end
  def printOddsArray
    y =[]
    for i in 1..255
      next if (i % 2) == 0
      y.push(i)
    end
    puts y
  end
  def printOddsArray
    y = []
    for i in 1..255
      next if (i % 2) == 0
      y.push(i)
    end
    puts y.to_s
  end
  def greaterThanY(y,arr)
    count = 0
    for i in arr
      if i > y 
        count += 1
      end
    end
    return count
  end
  def squareValues(arr)
    i =0
    while (i < arr.length) do
      arr[i] = arr[i] * arr[i]
      i += 1
    end
    return arr
  end
  def eliminateNegatives(arr)
    i =0
    while (i < arr.length) do
      if arr[i] < 0
        arr[i] = 0
      end
      i += 1
    end
    return arr
  end
  def maxMinAverage(arr)
    max = arr.first
    min = arr.first
    sum = 0
    for i in arr
      if i > arr.first
        max = i
      elsif i < arr.first
        min = i
      end
      sum += i
    end
    avg = sum/arr.length
    return our_hash = {:max => max, :min => min, :avg => avg}
  end
  def shiftValues(arr)
    arr.shift
    arr.push(0)
    return arr
    # for i in arr
    #   num = i
    #   arr.delete(i)
    #   arr.push(num)
    # end
    # arr.delete(arr.last)
    # arr.push(0)
    # puts arr.to_s
  end
  def numToString(arr)
    i = 0
    while (i < arr.length) do
      if arr[i] < 0 
        arr[i] = 'Dojo'
      end
      i += 1
    end
    return arr
  end
  