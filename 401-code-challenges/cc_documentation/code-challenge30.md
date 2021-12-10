# Hashtables

<!-- Short summary or background information -->

- Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

- The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

- Since we are able to hash our key and determine the exact location where our value is stored, we can do a lookup in an O(1) time complexity. This is ideal when quick lookups are required.

---

## Challenge

<!-- Description of the challenge -->

- Implement a Hashtable Class with the following methods:

  - add.
  - get.
  - contains.
  - hash.

---

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

- add:

  time => O(1)

  space => O(1)

- get:

  time => O(1)

  space => O(1)

- contains:

  time => O(1)

  space => O(1)

- hash:

  time => O(1)

  space => O(1)

---

## API

<!-- Description of each method publicly available in each of your hashtable -->

**add**

- Arguments: key, value
- Returns: nothing
- This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

**get**

- Arguments: key
- Returns: Value associated with that key in the table

**contains**

- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.

**hash**

- Arguments: key
- Returns: Index in the collection for that key
