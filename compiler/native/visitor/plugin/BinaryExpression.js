/*
 * This file is part of NectarJS
 * Copyright (c) 2017-2020 Adrien THIERRY
 * http://nectarjs.com - https://www.linkedin.com/in/adrien-thierry-fr/
 *
 * sources : https://github.com/nectarjs/nectarjs/
 *
 * this program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * You can be released from the requirements of the license by purchasing
 * a commercial license. Buying such a license is mandatory as soon as you
 * develop commercial activities involving the NectarJS software without
 * disclosing the source code of your own applications. Visit http://seraum.com/
 * and feel free to contact us.
 *
 */
 
function BinaryExpression(_path)
{
	if(_path.node.operator == "===")
	{
		var _eq = "__NJS_EQUAL_VALUE_AND_TYPE(";
		_eq += babel.generate(_path.node.left).code + ","
		_eq += babel.generate(_path.node.right).code + ")";
		_path.replaceWithSourceString(_eq);
	}
	else if(_path.node.operator == "!==")
	{
		var _not_eq = "__NJS_NOT_EQUAL_VALUE_AND_TYPE(";
		_not_eq += babel.generate(_path.node.left).code + ","
		_not_eq += babel.generate(_path.node.right).code + ")";
		_path.replaceWithSourceString(_not_eq);
	}
}
module.exports = BinaryExpression;