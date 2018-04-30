import re
class AddressManager(models.Manager):
    def validate_address(self, postData, passedCustomer):
        error = False
        zip_code_regex = re.compile(r'^\d{5}$')
        address_regex = re.compile(r'^\d{1,5}\s\w?.?\s?(\b\w*\b\s){1,2}\w*\.?$')
        general_character_regex = re.compile(r'^\w+$')
        state_regex = re.compile(r'^\w{2}$')
        errors = []
        error_return = {
            "status": "good",
            "data": ""
        }
        if not zip_code_regex.MATCH(postData['zipcode']):
            errors.append("Invalid zip code.")
            error = True
            error_return['status'] = "bad"
        if not address_regex.MATCH(postData['address']):
            errors.append("Invalid address.")
            # Do not allow P.O. Boxes.
            error = True
            error_return['status'] = "bad"
        if not state_regex.MATCH(postData['state']):
            errors.append("Invalid state.")
            error = True
            error_return['status'] = "bad"
        if not general_character_regex.MATCH(postData['city']):
            errors.append("Invalid city.")
            error = True
            error_return['status'] = "bad"
        if error == False:
            Address.objects.create(name = postData['name'], address = postData['address'], city = postData['city'], state = postData['state'], zipcode = postData['zipcode'], customer = passedCustomer)
            return error_return
        else:
            error_return['data'] = errors
            return error_return