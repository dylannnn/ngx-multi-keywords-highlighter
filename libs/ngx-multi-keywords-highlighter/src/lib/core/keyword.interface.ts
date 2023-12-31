/**
 * Keyword interface
 *
 * @namespace IKeyword
 * @property {number} id - Keyword id
 * @property {string} name - Keyword name
 * @property {string} color - Keyword highlighted color
 * @property {string} createdAt - Created timestamp
 */
export interface IKeyword {
  id?: number;
  name: string;
  color: string;
  createdAt: string;
}
